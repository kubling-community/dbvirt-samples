package com.kubling.sample.hibernate.repository;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.testcontainers.containers.KublingContainer;
import org.testcontainers.containers.Network;
import org.testcontainers.containers.output.Slf4jLogConsumer;
import org.testcontainers.images.builder.Transferable;
import org.testcontainers.k3s.K3sContainer;
import org.testcontainers.utility.DockerImageName;
import org.testcontainers.utility.MountableFile;

import java.util.Map;

@Slf4j
public class BaseRepositoryTest {

    protected static String USER_DIR = System.getProperty("user.dir");
    protected static String DEFAULT_APP_CONFIG = "app-config.yaml";
    protected static String DEFAULT_BUNDLE = "descriptor.zip";
    protected static String DEFAULT_KUBE_CONFIG = "/app_data/k3s-conf.yaml";
    protected static String DEFAULT_CONTAINER_CONFIG_DIR = "app_data";

    protected static String DEFAULT_CONTAINER_APP_CONFIG =
            String.format("/%s/%s", DEFAULT_CONTAINER_CONFIG_DIR, DEFAULT_APP_CONFIG);
    protected static String DEFAULT_CONTAINER_BUNDLE =
            String.format("/%s/%s", DEFAULT_CONTAINER_CONFIG_DIR, DEFAULT_BUNDLE);

    protected static Map<String, String> DEFAULT_ENV =
            Map.of("ENABLE_WEB_CONSOLE", "FALSE",
                    "SCRIPT_LOG_LEVEL", "DEBUG",
                    "APP_CONFIG", DEFAULT_CONTAINER_APP_CONFIG,
                    "DESCRIPTOR_BUNDLE", DEFAULT_CONTAINER_BUNDLE);

    public static Network network = Network.SHARED;

    private static K3sContainer k3s;
    private static KublingContainer kubling;

    @BeforeAll
    public static void initTestContainers() {
        initKubling(initK3s());
    }

    @AfterAll
    public static void stopTestContainers() {
        kubling.stop();
        k3s.stop();
    }

    public static String initK3s() {
        k3s = new K3sContainer(DockerImageName.parse("rancher/k3s:v1.21.3-k3s1"))
                .withNetwork(network)
                .withNetworkAliases("k3s")
                .withCommand("server", "--disable=traefik", "--tls-san=k3s");
        k3s.start();
        log.debug(k3s.generateInternalKubeConfigYaml("k3s"));
        return k3s.generateInternalKubeConfigYaml("k3s");
    }

    public static void initKubling(String kubeConfig) {
        kubling = new KublingContainer<>();
        kubling.withNetwork(network);
        kubling.withEnv(DEFAULT_ENV);

        kubling.withCopyFileToContainer(
                MountableFile.forHostPath(String.format("%s/vdb/%s", USER_DIR, DEFAULT_APP_CONFIG)),
                DEFAULT_CONTAINER_APP_CONFIG);
        kubling.withCopyFileToContainer(
                MountableFile.forHostPath(String.format("%s/vdb/%s", USER_DIR, DEFAULT_BUNDLE)),
                DEFAULT_CONTAINER_BUNDLE);
        kubling.withCopyToContainer(Transferable.of(kubeConfig), DEFAULT_KUBE_CONFIG);
        kubling.withLogConsumer(new Slf4jLogConsumer(log));
        kubling.withExposedPorts(KublingContainer.DEFAULT_NATIVE_PORT, KublingContainer.DEFAULT_HTTP_PORT);
        kubling.start();
    }

}
