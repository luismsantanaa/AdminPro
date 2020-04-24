export interface IMenu {
  titulo: string;
  icono: string;
  submenu: ISubMenu[];

}

export interface ISubMenu {
  titulo: string;
  icono: string;
  url: string;
}
