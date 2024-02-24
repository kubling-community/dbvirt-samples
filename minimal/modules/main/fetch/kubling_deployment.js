import { deploy1, deploy2 } from "/fetch/tuples";

export function fetchDeployments() {

    // Injected context objects have .json and .yaml members
    print(queryFilter.json);

    if (!queryFilter.filters.isEmpty()) {
        print("Has filters!");
    }

    return [ deploy1(), deploy2() ];

}