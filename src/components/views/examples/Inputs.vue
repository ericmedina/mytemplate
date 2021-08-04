<template>
  <div class="card">
    <h2 class="card-title">Inputs</h2>
    <div class="cols2">
      <pd-input id="basic-input" label="Basic input" placeholder="Típico input" ></pd-input>
      <pd-input id="basic-input" label="Disabled" placeholder="No podés usar éste input" disabled ></pd-input>
      <pd-input id="basic-input" label="Readonly" placeholder="Éste es sólo para leerlo" readonly classInput="form-control readonly" ></pd-input>
      <pd-input id="basic-input" label="Valid input" placeholder="Éste está perfecto" classInput="form-control is-valid" ></pd-input>
      <pd-input id="basic-input" label="Error input" placeholder="Ésto está mal" classInput="form-control is-invalid" ></pd-input>
      <pd-input id="basic-input" label="Input helper text" placeholder="Abajo hay ayuda.." >
        <small slot="helper" class="form-message">Puede ser ayuda o mensaje de error</small>
      </pd-input>
      <pd-input id="basic-input" label="Prepend" placeholder="Hay un ícono a la izquierda" prepend="dollar-sign"></pd-input>
      <pd-input id="basic-input" label="Prepend" placeholder="Hay un ícono a la izquierda" append="alert-triangle"></pd-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "Inputs",
};
</script>
