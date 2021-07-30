<template>
  <div class="card">
    <h2 class="card-title">Inputs</h2>
    <div class="grid">
      <div class="form-group">
        <label class="form-label">Basic input</label>
        <input type="text" placeholder="Basic input" class="form-control" />
      </div>
      <div class="form-group">
        <label class="form-label">Disabled</label>
        <input
          type="text"
          disabled
          placeholder="No podés usar éste input"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="form-label">Readonly</label>
        <input
          type="text"
          readonly
          placeholder="No podés usar éste input"
          class="form-control readonly"
        />
      </div>
      <div class="form-group">
        <label class="form-label">Valid input</label>
        <input
          type="text"
          placeholder="Ésto está bien"
          class="form-control is-valid"
        />
      </div>
      <div class="form-group">
        <label class="form-label">Error input</label>
        <input
          type="text"
          placeholder="Ésto está mal.."
          class="form-control is-invalid"
        />
      </div>
      <div class="form-group">
        <label class="form-label">Input helper text</label>
        <input
          type="text"
          placeholder="Abajo hay ayuda.."
          class="form-control"
        />
        <small class="form-message">Puede ser ayuda o mensaje de error</small>
      </div>
      <div class="form-group">
        <label class="form-label">Prepend</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"
              ><icon feather="dollar-sign"></icon
            ></span>
          </div>
          <input
            type="text"
            placeholder="Abajo hay ayuda.."
            class="form-control"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Append</label>
        <div class="input-group">
          <input
            type="text"
            placeholder="Abajo hay ayuda.."
            class="form-control"
          />
          <div class="input-group-append">
            <span class="input-group-text"
              ><icon feather="alert-triangle"></icon
            ></span>
          </div>
        </div>
      </div>
      <pd-input id="componente" label="Componente" placeholder="placeholder" ></pd-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "Inputs",
};
</script>
