export type INavDropdown = {
  id: number;
  name: string;
  path: string;
};

export type IHeaderNavItems = {
  id: number;
  name: string;
  path: string;
  dropdown: INavDropdown[];
};

export type ITimelineData = {
  id: number;
  img: any;
  title: string;
};

export type IBenefitsData = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

export type IFaqsDatas = {
  id: number;
  title: string;
  description: string;
};

export type ISelection = {
  id: number;
  text: string;
  active: boolean;
  configuration: string;
  size: string;
  price: string;
};

export type IBlog = {
  id: number;
  img: any;
  title: string;
  description: string;
  date: string;
};

export type IFooterMenu = {
  id: number;
  title: string;
  path: string;
};
