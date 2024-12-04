import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonSearchbar,
  IonButton,
  IonInput,
  IonModal,
} from '@ionic/react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
}

const GestionInventario: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      quantity: 10,
      price: 100,
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Product>({
    id: Date.now(),
    name: '',
    description: '',
    image: '',
    quantity: 0,
    price: 0,
  });

  const handleInputChange = (e: any, field: keyof Product) => {
    const value = e.detail.value;
    setNewProduct({ ...newProduct, [field]: value });
  };

  const saveProduct = () => {
    if (currentProduct) {
      setProducts(products.map(p => (p.id === currentProduct.id ? newProduct : p)));
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
    setModalOpen(false);
    setCurrentProduct(null);
    setNewProduct({ id: Date.now(), name: '', description: '', image: '', quantity: 0, price: 0 });
  };

  const editProduct = (product: Product) => {
    setCurrentProduct(product);
    setNewProduct(product);
    setModalOpen(true);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <IonPage>
      {/* Menú lateral */}
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button routerLink="/home">
              <IonLabel>Inicio</IonLabel>
            </IonItem>
            <IonItem button routerLink="/gestion-inventario">
              <IonLabel>Gestión de inventario</IonLabel>
            </IonItem>
            <IonItem button routerLink="/inventario">
              <IonLabel>Inventario</IonLabel>
            </IonItem>
            <IonItem button routerLink="/historial-movimientos">
              <IonLabel>Historial De Movimientos</IonLabel>
            </IonItem>
            <IonItem button routerLink="/ayuda">
              <IonLabel>Ayuda</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Contenido principal */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gestión de Inventario</IonTitle>
          <IonSearchbar slot="end" placeholder="Buscar..." style={{ width: '300px' }} />
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1>Gestión de Inventario</h1>
        <IonButton onClick={() => setModalOpen(true)}>Añadir Producto</IonButton>

        {/* Lista de productos */}
        <IonList>
          {products.map(product => (
            <IonCard key={product.id}>
              <IonCardHeader>
                <IonCardTitle>{product.name}</IonCardTitle>
                <IonCardSubtitle>Precio: ${product.price}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonThumbnail slot="start">
                    <img src={product.image} alt={product.name} />
                  </IonThumbnail>
                  <IonLabel>
                    <h2>{product.description}</h2>
                    <p>Cantidad: {product.quantity}</p>
                  </IonLabel>
                </IonItem>
                <IonButton onClick={() => editProduct(product)}>Editar</IonButton>
                <IonButton color="danger" onClick={() => deleteProduct(product.id)}>
                  Eliminar
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>

        {/* Modal para añadir/editar producto */}
        <IonModal isOpen={modalOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{currentProduct ? 'Editar Producto' : 'Añadir Producto'}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel position="floating">Nombre</IonLabel>
              <IonInput
                value={newProduct.name}
                onIonChange={e => handleInputChange(e, 'name')}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Descripción</IonLabel>
              <IonInput
                value={newProduct.description}
                onIonChange={e => handleInputChange(e, 'description')}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Imagen (URL)</IonLabel>
              <IonInput
                value={newProduct.image}
                onIonChange={e => handleInputChange(e, 'image')}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Cantidad</IonLabel>
              <IonInput
                type="number"
                value={newProduct.quantity}
                onIonChange={e => handleInputChange(e, 'quantity')}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Precio</IonLabel>
              <IonInput
                type="number"
                value={newProduct.price}
                onIonChange={e => handleInputChange(e, 'price')}
              />
            </IonItem>
            <IonButton expand="full" onClick={saveProduct}>
              Guardar
            </IonButton>
            <IonButton expand="full" color="light" onClick={() => setModalOpen(false)}>
              Cancelar
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default GestionInventario;
