<template>
    <div class="card">
        <h3 class="card-title">Modals</h3>
        <button class="btn btn-info" @click="modalOpen = !modalOpen">Open Common Modal</button>
        <modal v-if="modalOpen" @close="modalOpen = false">
            <div slot="modal-body">
                <h4 slot="modal-title" class="modal-title">Modal de ejemplo</h4>
                <button class="btn btn-dark">Botón de prueba</button>
            </div>
        </modal>
    </div>
</template>
<script>
export default {
    name: 'Modals',
    data(){
        return{
            modalOpen: false
        }
    }
}
</script>