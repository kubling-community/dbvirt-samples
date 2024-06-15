package com.kubling.sample.hibernate.repository;

import com.kubling.sample.hibernate.entity.k8s.Deployment;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;
import org.springframework.data.jpa.repository.support.JpaEntityInformationSupport;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class DeploymentRepository extends SimpleJpaRepository<Deployment, String> {

    protected final EntityManager em;

    public DeploymentRepository(EntityManager entityManager) {
        super(JpaEntityInformationSupport.getEntityInformation(Deployment.class, entityManager), entityManager);
        this.em = entityManager;
    }

    public Optional<List<Deployment>> findByNamespace(String namespace) {
        return getResultList(em.createQuery(
                        "select d from Deployment d where d.namespace = ?1", Deployment.class)
                .setParameter(1, namespace));
    }

    public Optional<Deployment> findByIdentifier(String identifier) {
        return getSingleResult(em.createQuery(
                        "select d from Deployment d where d.identifier = ?1", Deployment.class)
                .setParameter(1, identifier));
    }

    protected Optional<Deployment> getSingleResult(TypedQuery<Deployment> typedQuery) {
        try {
            return Optional.of(typedQuery.getSingleResult());
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    protected Optional<List<Deployment>> getResultList(TypedQuery<Deployment> typedQuery) {
        try {
            return Optional.of(typedQuery.getResultList());
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

}
