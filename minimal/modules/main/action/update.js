print('Update operation received:\n' + updateOperation.yaml);
let u = updateOperation.updates;
print(u.size());

u.forEach(function(element) {
    print(element.fieldName)
});