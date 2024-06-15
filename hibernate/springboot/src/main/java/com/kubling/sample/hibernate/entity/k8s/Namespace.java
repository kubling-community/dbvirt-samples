package com.kubling.sample.hibernate.entity.k8s;

import com.kubling.sample.hibernate.entity.VDBSchemaNames;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "NAMESPACE", schema = VDBSchemaNames.KUBERNETES)
@Cacheable
@Getter
@Setter
public class Namespace {

    @Id
    @Column(name = "metadata__name")
    private String metadataName;

    @Column(name = "clusterName")
    private String clusterName;

    @Column(name = "clusterUrl")
    private String clusterUrl;

    @Column(name = "schema")
    private String schema;

    @Column(name = "metadata__labels")
    private String metadataLabels;

    @Column(name = "status__phase")
    private String statusPhase;

}