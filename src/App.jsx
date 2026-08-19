
import { Routes, Route } from 'react-router-dom';
import Inicio from './screens/Inicio';
import Catalogo from './screens/Catálogo';
import Actividad from './screens/Actividad';
import CargarSaldo from './screens/CargarSaldo';
import Mas from './screens/Mas';
import TabBar from './components/TabBar';


export default function App() {
  return (
    <div className="min-h-screen max-w-[430px] mx-auto pb-20 text-carbon" translate="no">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/cargarsaldo" element={<CargarSaldo />} />
        <Route path="/actividad" element={<Actividad />} />
        <Route path="/mas" element={<Mas />} />
      </Routes>
      <TabBar />
    </div>
  );
}
