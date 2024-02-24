
export function deploy1() {
    return {
       "name": "deploy1",
       "readiness": "READY",
       "state": "Running",
       "age": "50",
       "replicas": "2",
       "message": "Containers running normally."
   }
}

export function deploy2() {
    return {
        "name": "deploy2",
        "readiness": "NOT READY",
        "state": "ImagePullBackOff",
        "age": "1",
        "replicas": "1",
        "message": "Error pulling image."
   }
}