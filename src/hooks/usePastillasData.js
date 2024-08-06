import data from '../data.json';

const requireContext = require.context('../assets/pastillas', false, /\.(png|jpe?g|svg|bmp)$/);
const images = requireContext.keys().map(requireContext);

const getPastillasData = () => {
  const resultados = data[0]?.resultados;

  if (!Array.isArray(resultados)) {
    console.error('resultados no está definido o no es un array');
    return { error: 'Error al cargar los resultados' };
  }

  return { images, resultados };
}

export default getPastillasData;
