package com.kubling.sample.hibernate.repository;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.parallel.Execution;
import org.junit.jupiter.api.parallel.ExecutionMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Objects;
import java.util.concurrent.BlockingDeque;
import java.util.stream.Collectors;

@ExtendWith(SpringExtension.class)
@AutoConfigureDataJpa
@SpringBootTest
@ActiveProfiles("unit-test")
@Execution(ExecutionMode.SAME_THREAD)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@Slf4j
public class DeploymentRepositoryTest extends BaseRepositoryTest {

    @Autowired
    DeploymentRepository deploymentRepository;

    @Test
    @Order(1)
    public void findAllTest() {
        final var nsList = deploymentRepository.findAll();
        Assertions.assertFalse(nsList.isEmpty());
        nsList.forEach(d -> log.debug(d.getName()));
    }

    @Test
    @Order(5)
    public void findByNamespaceTest() {
        final var nList = deploymentRepository.findByNamespace("kube-system");
        Assertions.assertFalse(nList.isEmpty());
        Assertions.assertFalse(nList.get().isEmpty());
        Assertions.assertEquals(3, nList.get().size());
        Assertions.assertTrue(nList.get().stream().map(deployment -> deployment.getName())
                .collect(Collectors.toUnmodifiableList())
                .containsAll(List.of("metrics-server", "coredns", "local-path-provisioner")));

        final var coreDNS = nList.get().stream().filter(d -> d.getName().equals("coredns")).findFirst();
        Assertions.assertTrue(coreDNS.get().getLabels().containsKey("kubernetes.io/name"));
        Assertions.assertTrue(coreDNS.get().getLabels().containsValue("CoreDNS"));

        Assertions.assertTrue(nList.get().stream()
                .allMatch(d -> Objects.nonNull(d.getContainers()) && !d.getContainers().isEmpty()));

        nList.get().forEach(d -> log.debug("{} {} {}", d.getName(), d.getIdentifier(), d.getClusterName()));
    }

    @Test
    @Order(10)
    public void findByIdentifierTest() {
        final var deploy = deploymentRepository
                .findByIdentifier("BcGn2GD47G4WUWGYDSxm7qWNqa3tl21dSeEk5aIeATp0TTBch3xAjrUiOBnZeE1805437321010");
        Assertions.assertFalse(deploy.isEmpty());
        Assertions.assertEquals("local-path-provisioner", deploy.get().getName());
        Assertions.assertEquals("kube-system", deploy.get().getNamespace());
        log.debug(deploy.get().getClusterName());
        Assertions.assertEquals("k3s_cluster", deploy.get().getClusterName());
        Assertions.assertFalse(deploy.get().getContainers().isEmpty());
    }

}
