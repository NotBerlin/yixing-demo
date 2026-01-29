// 商品类型定义
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

// 采购计划类型定义
export interface ProcurementPlan {
  id: string;
  name: string;
  status: '进行中' | '待审批' | '已完成';
  totalAmount: number;
  createDate: string;
}

// 采购订单类型定义
export interface PurchaseOrder {
  id: string;
  supplier: string;
  totalAmount: number;
  status: '已下单' | '已发货' | '已完成';
  items: number;
  createDate: string;
}

// 入库记录类型定义
export interface WarehouseEntry {
  id: string;
  orderId: string;
  supplier: string;
  totalAmount: number;
  status: '已入库' | '待入库';
  entryDate: string;
  items: number;
}

// 供应商类型定义
export interface Supplier {
  id: string;
  name: string;
  contact: string;
  phone: string;
  email: string;
  rating: number;
  status: '活跃' | '非活跃';
  category: string;
}

// 供应商联系人类型定义
export interface SupplierContact {
  name: string;
  position: string;
  phone: string;
  email: string;
  preferred: boolean;
}

// 供应商联系信息类型定义
export interface SupplierWithContacts {
  id: string;
  supplierId: string;
  supplierName: string;
  contacts: SupplierContact[];
  address: string;
  website: string;
}

// 供应商评价类型定义
export interface SupplierEvaluation {
  id: string;
  supplierId: string;
  supplierName: string;
  evaluator: string;
  rating: number;
  date: string;
  content: string;
  categories: {
    quality: number;
    delivery: number;
    service: number;
    price: number;
  };
}

// 导航类型定义
export type RootStackParamList = {
  Main: undefined;
  ProductDetail: { product: Product };
};

export type HomeStackParamList = {
  HomeMain: undefined;
  ProductList: undefined;
  ProcurementPlan: undefined;
  PurchaseOrder: undefined;
  WarehouseEntry: undefined;
  SupplierList: undefined;
  SupplierEvaluation: undefined;
  ContactSupplier: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};
