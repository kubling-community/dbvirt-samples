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
public class NamespaceRepositoryTest {

    @Autowired
    NamespaceRepository namespaceRepository;

    @Test
    @Order(1)
    public void findByAll() {
        final var nsList = namespaceRepository.findAll();
        Assertions.assertFalse(nsList.isEmpty());
        Assertions.assertEquals(nsList.size(), 8);
        Assertions.assertTrue(nsList.stream().map(namespace -> namespace.getMetadataName())
                .collect(Collectors.toUnmodifiableList())
                .containsAll(List.of("default", "kube-system", "kube-public", "kube-node-lease")));
    }

}
