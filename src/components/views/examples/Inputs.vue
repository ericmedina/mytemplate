<template>
  <div class="card">
    <h2 class="card-title">Inputs</h2>
    <div class="cols2">
      <pui-input id="basic-input" label="Basic input" placeholder="Típico input" ></pui-input>
      <pui-input id="basic-input" label="Disabled" placeholder="No podés usar éste input" disabled ></pui-input>
      <pui-input id="basic-input" label="Readonly" placeholder="Éste es sólo para leerlo" readonly classInput="form-control readonly" ></pui-input>
      <pui-input id="basic-input" label="Valid input" placeholder="Éste está perfecto" classInput="form-control is-valid" ></pui-input>
      <pui-input id="basic-input" label="Error input" placeholder="Ésto está mal" classInput="form-control is-invalid" ></pui-input>
      <pui-input id="basic-input" label="Input helper text" placeholder="Abajo hay ayuda.." >
        <small slot="helper" class="form-message">Puede ser ayuda o mensaje de error</small>
      </pui-input>
      <pui-input id="basic-input" label="Prepend" placeholder="Hay un ícono a la izquierda" prepend="dollar-sign"></pui-input>
      <pui-input id="basic-input" label="Prepend" placeholder="Hay un ícono a la izquierda" append="alert-triangle"></pui-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "Inputs",
};
</script>
