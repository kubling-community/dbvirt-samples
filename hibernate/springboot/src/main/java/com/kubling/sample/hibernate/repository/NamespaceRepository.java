package com.kubling.sample.hibernate.repository;

import com.kubling.sample.hibernate.entity.k8s.Namespace;
import jakarta.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.JpaEntityInformationSupport;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class NamespaceRepository extends SimpleJpaRepository<Namespace, String> {

    public NamespaceRepository(EntityManager entityManager) {
        super(JpaEntityInformationSupport.getEntityInformation(Namespace.class, entityManager), entityManager);
    }

}
