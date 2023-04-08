import { Component } from 'solid-js';

export const Loader: Component = () => (
  <div class='d-flex flex-column align-items-center m-5'>
    <div class='spinner-border' role='status' />
    <strong class='p-3'>Loading...</strong>
  </div>
);
