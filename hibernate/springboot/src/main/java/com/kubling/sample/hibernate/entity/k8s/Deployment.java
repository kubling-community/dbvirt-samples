package com.kubling.sample.hibernate.entity.k8s;

import com.kubling.sample.hibernate.entity.JsonToContainersConverter;
import com.kubling.sample.hibernate.entity.LabelsToMapConverter;
import com.kubling.sample.hibernate.entity.VDBSchemaNames;
import io.fabric8.kubernetes.api.model.Container;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Entity
@Table(name = "DEPLOYMENT", schema = VDBSchemaNames.KUBERNETES)
@Cacheable
@Getter
@Setter
public class Deployment {

    @Id
    @Column(name = "identifier")
    private String identifier;

    @Column(name = "clusterName")
    private String clusterName;

    @Column(name = "clusterUrl")
    private String clusterUrl;

    @Column(name = "schema")
    private String schema;

    @Column(name = "metadata__name")
    private String name;

    @Column(name = "metadata__namespace")
    private String namespace;

    @Column(name = "metadata__labels")
    @Convert(converter = LabelsToMapConverter.class)
    private Map<String, String> labels;

    @Column(name = "spec__template__spec__containers")
    @Convert(converter = JsonToContainersConverter.class)
    private List<Container> containers;

}
