import Home_Inactive from '../assets/TabVarIcons/HomeInactive.svg'
import Home_Active from '../assets/TabVarIcons/HomeActive.svg'
import Catalog_Inactive from '../assets/TabVarIcons/CatalogInactive.svg'
import Catalog_Active from '../assets/TabVarIcons/CatalogActive.svg'
import Cargar_Active from '../assets/TabVarIcons/CargarActive.svg'
import Cargar_Inactive from '../assets/TabVarIcons/CargarInactive.svg'
import Activity_Active from '../assets/TabVarIcons/ActivityActive.svg'
import Activity_Inactive from '../assets/TabVarIcons/ActivityInactive.svg'
import More_Active from '../assets/TabVarIcons/MoreActive.svg'
import More_Inactive from '../assets/TabVarIcons/MoreInactive.svg'
import { NavLink } from 'react-router-dom'

type TabProps = {
    to:string;
    label:string;
    iconActive:string;
    iconInactive:string;
    badge?:number;
};

function CargarTab() {
  return (
    <NavLink to="/cargarsaldo" className="flex flex-col items-center w-16">
      {({ isActive }) => (
        <>
          <span
            className={`w-16 h-16 -translate-y-5 rounded-full 
                        flex items-center justify-center shadow-lg
                        ring-4 ring-crema transition-transform duration-200
                        ${isActive ? "ring-naranja/30 scale-105 bg-crema" : "bg-naranja"}`}
          >
            <img src={isActive ? Cargar_Active : Cargar_Inactive} alt="" className="w-7 h-7" />
          </span>
          <span
            className={`-mt-3 font-sans font-bold text-xs text-center ${
              isActive ? "text-naranja tracking-widest" : "text-[#9A9A9A]"
            }`}
          >
            Cargar saldo
          </span>
        </>
      )}
    </NavLink>
  );
}


function Tab({ to, label, iconActive, iconInactive, badge }: TabProps) {
  return (
    <NavLink
      to={to}
      className="flex flex-col items-center justify-center gap-1 w-16 py-2"
    >
      {({ isActive }) => (
        <>
          <span className="relative">
            <img
              src={isActive ? iconActive : iconInactive}
              alt=""
              className="w-7 h-7"
            />
            {badge ? (
              <span className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1
                               rounded-full bg-ambar text-[10px] font-bold
                               text-neutral-900 flex items-center justify-center">
                {badge > 9 ? "9+" : badge}
              </span>
            ) : null}
          </span>
          <span
            className={`font-sans font-bold text-xs whitespace-nowrap tracking-wide transition-colors duration-200 ${
              isActive ? "text-naranja tracking-widest" : "text-[#9A9A9A]"
            }`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default function TabBar() {
    return (
        <nav className="fixed bottom-0 inset-x-0 z-50 mx-auto max-w-[430px] bg-white rounded-t-3xl shadow-[0_-2px_16px_rgba(0,0,0,0.08)] flex justify-around items-end px-2 pt-0 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            <Tab to="/" label="Inicio" iconActive={Home_Active} iconInactive={Home_Inactive} />
            <Tab to="/catalogo" label="Catálogo" iconActive={Catalog_Active} iconInactive={Catalog_Inactive} />
            <CargarTab />
            <Tab to="/actividad" label="Actividad" iconActive={Activity_Active} iconInactive={Activity_Inactive} />
            <Tab to="/mas" label="Más" iconActive={More_Active} iconInactive={More_Inactive} />
        </nav>
        
    );
}