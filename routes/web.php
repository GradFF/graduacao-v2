<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['test' => 'working']);
});

Route::get('/about', function () {
    return Inertia::render('About', ['about_us' => 'working']);
});
