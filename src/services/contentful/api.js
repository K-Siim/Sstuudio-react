import axios from 'axios';

const API = axios.create({
    baseURL: 'https://cdn.contentful.com',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    }
});

export const getProducts = async () => {
    try {
        const response = await API.get(`/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/master/entries`, {
            params: {
                content_type: 'product'
            }
        });

        const getDescriptionText = (richText) => {
            if (!richText || !richText.content) return '';
            
            return richText.content
                .filter(item => item.nodeType === 'paragraph')
                .map(paragraph => 
                    paragraph.content
                        .filter(content => content.nodeType === 'text')
                        .map(text => text.value)
                        .join(' ')
                )
                .join(' ');
        };

        return response.data.items.map(item => ({
            id: item.sys?.id,
            productCode: item.fields.productCode,
            title: item.fields.productName,
            description: getDescriptionText(item.fields.productDescription),
            price: item.fields.productPrice,
            images: Array.isArray(item.fields.productImages) 
                ? item.fields.productImages.map(image => ({
                    url: `https:${response.data.includes.Asset.find(
                        asset => asset.sys?.id === image.sys?.id
                    )?.fields.file.url}`,
                    alt: item.fields.productName
                }))
                : [],
            category: {
              id: item.fields.category.sys?.id,
              title: response.data.includes.Entry.find(
                entry => entry.sys?.id === item.fields.category.sys?.id
              )?.fields.title,
            },
          }));
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await API.get(`/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/master/entries`, {
            params: {
                content_type: 'category'
            }
        });

        return response.data.items.map(item => ({
            id: item.sys?.id,
            title: item.fields.categoryName,
            url: item.fields.slug,
            description: item.fields.categoryDescription,
            // image: item.fields.image && {
            //   url: `https:${response.data.includes.Asset.find(
            //     asset => asset.sys?.id === item.fields.image.sys?.id
            //   )?.fields.file.url}`,
            //   alt: item.fields.title,
            // },
          }));
    } catch (error) {
        console.log('Error fetching categories: ', error);
        throw error;
    }
};

export default API;

