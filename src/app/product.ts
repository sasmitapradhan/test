export class Product {
    productId: Number;
    productName: String;
    productCode: String;
    releaseDate: String;
    price: Number;
    description: String;
    starRating: Number;
    imageUrl: String;
    availableUnits: Number;
    technicalDetails: [
        {
           capacity: string,
           dimension: string,
           operation: string,
           controlSystem: string,
           heatingMethod: string,
           gearBox: string,
           powerRating: string,
           bodyMake: any,
           decomposingMethod: string,
           powerConsumption: string,
           electricalSystemSupported: any

        }
    ];
}
