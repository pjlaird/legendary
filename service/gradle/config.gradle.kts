mapOf(
        Pair("kotlinVersion", "1.2.10"),
        Pair("springBootVersion", "2.0.0.M7")
).entries.forEach {
    project.extra.set(it.key, it.value)
}