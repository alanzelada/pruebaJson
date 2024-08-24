import data from '../data.json';

const requireContext = require.context('../assets/pastillas', false, /\.(png|jpe?g|svg|bmp)$/);
const images = requireContext.keys().map(requireContext);

const getPastillasData = () => {
  const resultados = data[0]?.resultados;
  const causa_rechazo = data[0]?.causa_rechazo;
  const est_bandeja = data[0]?.est_bandeja;
  const est_lote = data[0]?.est_lote;

  if (!Array.isArray(resultados)) {
    console.error('resultados no está definido o no es un array');
    return { error: 'Error al cargar los resultados' };
  }

  return { images, resultados, causa_rechazo, est_bandeja, est_lote };
}

export default getPastillasData;
