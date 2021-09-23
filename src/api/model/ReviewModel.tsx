export interface Root {
    __typename: string
    stagedOrderId: string
    order: Order
    sender: Sender
    receiver: Receiver
  }
  
  export interface Order {
    cartId: any
    orderId: any
    paymentMethod: PaymentMethod
    product: Product
  }
  
  export interface PaymentMethod {
    paymentType: string
  }
  
  export interface Product {
    code: string
    name: string
    type: string
    routingCode: string
    pricingContext: string
    speedIndicator: string
    deliverySpeed: string
    exchangeRate: number
    fees: number
    destinationFees: number
    origination: Origination
    destination: Destination
  }
  
  export interface Origination {
    countryIsoCode: string
    currencyIsoCode: string
    principalAmount: number
  }
  
  export interface Destination {
    countryIsoCode: string
    currencyIsoCode: string
    actualPayoutAmount: number
    expectedPayoutAmount: number
  }
  
  export interface Sender {
    id: any
    uid: any
    name: Name
    address: Address
    email: string
    accountNumber: number
    customerType: any
    termsConditions: boolean
    complianceData: ComplianceData
  }
  
  export interface Name {
    first: string
    middle: string
    last: string
  }
  
  export interface Address {
    addressLine1: string
    addressLine2: any
    city: string
    stateCode: string
    countryCode: string
    postalCode: string
  }
  
  export interface ComplianceData {
    complianceType: string
    documents: Document[]
  }
  
  export interface Document {
    docType: string
    docNumber: string
    docSubType: string
    primary: boolean
  }
  
  export interface Receiver {
    id: string
    uid: string
    name: Name
    address: Address
    accountNumber: any
    customerType: any
    termsConditions: boolean
  }
  
  
  