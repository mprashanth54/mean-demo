import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  submitted: Boolean = false;
  category: Array<string> = [
    "Clothes",
    "Watch",
    "Accessories"
  ]
  subCategory = {
    clothes: [
      "Formal",
      "Casual",
      "Smart Casual"
    ],
    watch: [
      "Digital",
      "Analog",
      "Fitbit"
    ],
    accesories: [
      "Headphones",
      "Mobile Covers",
      "Speakers"
    ]
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],

      price: ['', [Validators.required, Validators.min(500), Validators.max(10000)]],

      category: [
        this.category[0],
        [
          Validators.required
        ]
      ],

      subCategory: [this.subCategory.clothes[0], Validators.required],
      // image: ['', Validators.required],
      // dimensions: [''],
      // giftWrap: ['Yes', Validators.required]
    });
  }

  getSelectedCategory() {
    switch (this.productForm.controls['category'].value) {
      case 'Clothes': return 'clothes'
      case 'Watch': return 'watch'
      case 'Accessories': return 'accesories'
    }
  }

  updateSubcategory() {
    this.productForm.patchValue({
      subCategory: this.subCategory[this.getSelectedCategory()][0]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    console.log(this.productForm.value)
  }
}
