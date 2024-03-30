// In this case we assume that the user name matches with the only principal associated to the subject.
// The subject is the entity that initiated the connection request, which may have multiple
// identities within an organization. Each identity is informed as a Principal, which are the identifiers propagated
// to the engine.
auth.addPrincipal(auth.userName);

// Add all roles associated to principals. Please note that, in order to have a real fine-grained RBAC, roles are the
// most important part of the auth chain.
if (auth.userName === "sa") {
    // matches 'full_control'
    auth.trust();
    auth.addRole("ROLE_FULL");
    auth.addRole("ROLE_FULL2");
} else if (auth.userName === "reader") {
    // matches 'only_read'
    auth.trust();
    auth.addRole("ROLE_ONLY_READ");
} else if (auth.userName === "scout") {
    // does not match any mapped roles
    auth.trust();
    auth.addRole("BAD_ROLE");
} else if (auth.userName === "baddie") {
    auth.locked("Don't even try it again!")
} else {
    auth.bad();
}
