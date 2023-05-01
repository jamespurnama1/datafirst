import {onBeforeUnmount, onMounted, type Ref} from 'vue'

export default function useDetectOutsideClick(component: Ref<HTMLElement | null>, callback: Function) {
    if (!component) return
    const listener = (event: MouseEvent) => {
        if (event.target !== component.value && (component.value && event.composedPath().includes(component.value))) {
            return
        }
        if (typeof callback === 'function') {
            callback(event)
        }
    }
    onMounted(() => { window.addEventListener('click', listener) })
    onBeforeUnmount(() => {window.removeEventListener('click', listener)})

    return {listener}
}