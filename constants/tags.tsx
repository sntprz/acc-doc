export const tagConfig = {
    Seguridad: { color: '#fcba03' },
    Funcional: { color: '#6058ad' },
};

export const tagStyle = (type) => ({
    backgroundColor: tagConfig[type].color,
    padding: '4px 8px',
    borderRadius: '4px',
    color: 'white',
    display: 'inline-block',
    fontSize: '12px', // Añadido para reducir el tamaño de la fuente
});