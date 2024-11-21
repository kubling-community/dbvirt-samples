print('Delete operation received on TABLE: ' + deleteOperation.table);

logger.debug(deleteOperation.queryFilter.yaml);
logger.debug(deleteOperation.yamlList.stringify());
affectedRows.increment();