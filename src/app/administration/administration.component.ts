import { isNgTemplate } from '@angular/compiler';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { range } from 'rxjs/observable/range';
import { IProduct } from '../core/interfaces/product.interface';
import { AdministrationService } from '../core/services/administration.service';

class ProductRegistration {
  constructor(
    public name: string = '',
    public description: string = '',
    public price: number = null,
    public quantity: number = null
  ) {}
}

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, AfterViewChecked {
  
  // It maintains list of Products
  productList: IProduct[] = [];
  // It maintains product Model
  productModel: IProduct;
  // It maintains product form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of Quantity.
  fixedQuantity: number[] = Array.from(Array(21).keys());
  // Quick Filter 
  quickFilter: string = '';

  constructor(private adminService: AdministrationService) {
   }

  ngOnInit() {
    this.productList = this.adminService.getProductList();
  }

  ngAfterViewChecked() {
    if (this.showNew) {
      this.goToBottom();
    }
  }

  // This method associate to New Button.
  onNew() {
    // Initiate new product.
    this.productModel = new ProductRegistration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display product entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push product object into product list.
      this.productModel.id = 'id' + Date.now() + Math.floor(Math.random() * 100);
      this.productList.push(this.productModel);
    } else {
      // Update the existing properties values based on model.
      this.productList[this.selectedRow].name = this.productModel.name;
      this.productList[this.selectedRow].description = this.productModel.description;
      this.productList[this.selectedRow].price = this.productModel.price;
      this.productList[this.selectedRow].quantity = this.productModel.quantity;
    }
    // Hide form.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(item: IProduct) {
    // Initiate new product.
    this.productModel = new ProductRegistration();
    // Retrieve selected product from list and assign to model.
    this.productModel = Object.assign({}, this.productList.find(i => i.id === item.id));
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display product entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(item: IProduct) {
    // Delete the corresponding product entry from the list.
    // this.productList.splice(index, 1);
    this.productList = this.productList.filter(i => i.id !== item.id)
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide product entry section.
    this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
  onChangeQuantity(quantity: number) {
    // Assign corresponding selected quantity to model.
    this.productModel.quantity = quantity;
  }

  // This method takes to bottom of the page.
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }

}
