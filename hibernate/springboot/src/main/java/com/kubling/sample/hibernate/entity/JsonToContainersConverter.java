package com.kubling.sample.hibernate.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.fabric8.kubernetes.api.model.Container;
import jakarta.persistence.AttributeConverter;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.List;

@Slf4j
public class JsonToContainersConverter implements AttributeConverter<List<Container>, Clob> {

    private static final ObjectMapper mapper = new ObjectMapper()
            .setSerializationInclusion(JsonInclude.Include.NON_NULL);

    private static final TypeReference<List<Container>> typeRef = new TypeReference<>() {};

    @Override
    public Clob convertToDatabaseColumn(List<Container> attribute) {
        return null;
    }

    @Override
    public List<Container> convertToEntityAttribute(Clob dbData) {
        try {
            return mapper.readValue(
                    new String(dbData.getAsciiStream().readAllBytes()),
                    typeRef);
        } catch (IOException | SQLException e) {
            throw new RuntimeException(e);
        }
    }

}
