CREATE FOREIGN TABLE CODE_REPO
(
      identifier string OPTIONS(val_pk 'org+name' ),
      org string not null,
      schema string OPTIONS(val_constant '{{ schemaModel.name }}'),
      schemaProp string OPTIONS(val_constant '{{ schemaModel.properties.prop }}'),
      owner__login string,
      id integer,
      node_id string,
      name string not null,
      full_name string,
      description string,
      private boolean,
      visibility string,
      html_url string,
      owner json OPTIONS(parser_format 'asJsonPretty'),
      PRIMARY KEY(identifier)
) OPTIONS(updatable true);