print('Delete operation received on TABLE: ' + deleteOperation.table);

print(deleteOperation.queryFilter.yaml);
print(deleteOperation.yamlList.stringify());
affectedRows.increment();