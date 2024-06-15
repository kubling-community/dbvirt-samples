package com.kubling.sample.hibernate.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.Map;

@Slf4j
public class LabelsToMapConverter implements AttributeConverter<Map<String, String>, Clob> {

    private static final ObjectMapper mapper = new ObjectMapper()
            .setSerializationInclusion(JsonInclude.Include.NON_NULL);

    @Override
    public Clob convertToDatabaseColumn(Map<String, String> attribute) {
        return null;
    }

    @Override
    public Map<String, String> convertToEntityAttribute(Clob dbData) {
        try {
            return mapper.readValue(new String(dbData.getAsciiStream().readAllBytes()), Map.class);
        } catch (IOException | SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
