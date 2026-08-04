<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contacts">Contacts</router-link>
            <router-link to="/users/1">User 1</router-link>
        </nav>
        <router-view />
    </div>
</template>
