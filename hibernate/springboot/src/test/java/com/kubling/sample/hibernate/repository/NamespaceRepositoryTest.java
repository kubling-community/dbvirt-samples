package com.kubling.sample.hibernate.repository;

import com.kubling.sample.hibernate.entity.k8s.Namespace;
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

@ExtendWith(SpringExtension.class)
@AutoConfigureDataJpa
@SpringBootTest
@ActiveProfiles("unit-test")
@Execution(ExecutionMode.SAME_THREAD)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@Slf4j
public class NamespaceRepositoryTest extends BaseRepositoryTest {

    @Autowired
    NamespaceRepository namespaceRepository;

    @Test
    @Order(1)
    public void findAllTest() {
        final var nsList = namespaceRepository.findAll();
        Assertions.assertFalse(nsList.isEmpty());
        Assertions.assertEquals(4, nsList.size());
        Assertions.assertTrue(nsList.stream().map(Namespace::getMetadataName)
                .toList()
                .containsAll(List.of("default", "kube-system", "kube-public", "kube-node-lease")));
    }

    @Test
    @Order(2)
    public void insertNewNamespaceTest() {
        Namespace namespace = new Namespace();
        namespace.setMetadataName("nstest");
        namespaceRepository.save(namespace);
        final var nsList = namespaceRepository.findById("nstest");
        Assertions.assertTrue(nsList.isPresent());
        Assertions.assertEquals("nstest", nsList.get().getMetadataName());
    }
}

