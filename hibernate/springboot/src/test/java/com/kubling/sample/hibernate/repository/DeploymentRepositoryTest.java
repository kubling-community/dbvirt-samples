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
import java.util.stream.Collectors;

@ExtendWith(SpringExtension.class)
@AutoConfigureDataJpa
@SpringBootTest
@ActiveProfiles("unit-test")
@Execution(ExecutionMode.SAME_THREAD)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@Slf4j
public class DeploymentRepositoryTest {

    @Autowired
    DeploymentRepository deploymentRepository;

    @Test
    @Order(1)
    public void findByAll() {
        final var nsList = deploymentRepository.findAll();
        Assertions.assertTrue(nsList.isEmpty());
    }

    @Test
    @Order(5)
    public void findByNamespace() {
        final var nList = deploymentRepository.findByNamespace("08abb0fc-f7af-4fe8-98d4-e76729567dc8");
        Assertions.assertFalse(nList.isEmpty());
        Assertions.assertFalse(nList.get().isEmpty());
        Assertions.assertEquals(4, nList.get().size());
        Assertions.assertTrue(nList.get().stream().map(deployment -> deployment.getName())
                .collect(Collectors.toUnmodifiableList())
                .containsAll(List.of("nginx", "storage1-08abb0fc-f7af-4fe8-98d4-e76729567dc8")));
        nList.get().forEach(deployment -> {
            Assertions.assertFalse(deployment.getLabels().isEmpty());
            deployment.getLabels().forEach((k, v) -> Assertions.assertTrue(k.startsWith("mgmt.kubling.com")));
        });
        Assertions.assertFalse(nList.get().getFirst().getContainers().isEmpty());
        Assertions.assertTrue(
                nList.get().stream()
                        .map(d -> d.getContainers().stream().map(c -> c.getName()).collect(Collectors.toUnmodifiableList()))
                        .collect(Collectors.toList()).stream().flatMap(List::stream).collect(Collectors.toUnmodifiableList())
                        .containsAll(List.of("1-nginx", "2-nginx", "nfs-server")));

    }

    @Test
    @Order(10)
    public void findByIdentifier() {
        final var deploy = deploymentRepository
                .findByIdentifier("5Q8xAd94z4gFYBayhAkUui8oDhSOj71jwkShxnKBdNnNvINfPdnfYSzccGrlDnRp9EDc14aOsoZ2t0si81113405626010");
        Assertions.assertFalse(deploy.isEmpty());
        Assertions.assertEquals("nginx", deploy.get().getName());
        Assertions.assertEquals("08abb0fc-f7af-4fe8-98d4-e76729567dc8", deploy.get().getNamespace());
        Assertions.assertEquals("my_demo_cluster_1", deploy.get().getClusterName());
        Assertions.assertFalse(deploy.get().getContainers().isEmpty());
        Assertions.assertEquals(2, deploy.get().getContainers().size());
    }

}
