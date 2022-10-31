import { Component, OnInit } from '@angular/core';

interface portfolioList {
  id: number,
  img: string,
  title: string,
  description: string,
};

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {


  portfolioItems: Array<portfolioList> = [
    {id:0, img:'../../../../../assets/images/default-placeholder.png', title:'IDK',description:'lorefemiuuuuunf eunfi uefbiebfieb fuebfuevbfguevbfj dvbfhdbfebfi ifbhsifbsijfbeib esbfiebfseibfsdjifbdjfbisefb fbsjfbsnfbfbeih bfjsbifesufsbjkfbdnsbfie hfbefhbsdhf bhfbdhb dhfbdh bd  dbh djbdhb sdjkfbeh  wiwfof w f  grgrttk' },
    {id:0, img:'../../../../../assets/images/default-placeholder.png', title:'IDK',description:'lorefemiuuuuunf eunfi uefbiebfieb fuebfuevbfguevbfj dvbfhdbfebfi ifbhsifbsijfbeib esbfiebfseibfsdjifbdjfbisefb fbsjfbsnfbfbeih bfjsbifesufsbjkfbdnsbfie hfbefhbsdhf bhfbdhb dhfbdh bd  dbh djbdhb sdjkfbeh  wiwfof w f  grgrttk' },
    {id:0, img:'../../../../../assets/images/default-placeholder.png', title:'IDK',description:'lorefemiuuuuunf eunfi uefbiebfieb fuebfuevbfguevbfj dvbfhdbfebfi ifbhsifbsijfbeib esbfiebfseibfsdjifbdjfbisefb fbsjfbsnfbfbeih bfjsbifesufsbjkfbdnsbfie hfbefhbsdhf bhfbdhb dhfbdh bd  dbh djbdhb sdjkfbeh  wiwfof w f  grgrttk' },
    {id:0, img:'../../../../../assets/images/default-placeholder.png', title:'IDK',description:'lorefemiuuuuunf eunfi uefbiebfieb fuebfuevbfguevbfj dvbfhdbfebfi ifbhsifbsijfbeib esbfiebfseibfsdjifbdjfbisefb fbsjfbsnfbfbeih bfjsbifesufsbjkfbdnsbfie hfbefhbsdhf bhfbdhb dhfbdh bd  dbh djbdhb sdjkfbeh  wiwfof w f  grgrttk' },
    {id:0, img:'../../../../../assets/images/default-placeholder.png', title:'IDK',description:'lorefemiuuuuunf eunfi uefbiebfieb fuebfuevbfguevbfj dvbfhdbfebfi ifbhsifbsijfbeib esbfiebfseibfsdjifbdjfbisefb fbsjfbsnfbfbeih bfjsbifesufsbjkfbdnsbfie hfbefhbsdhf bhfbdhb dhfbdh bd  dbh djbdhb sdjkfbeh  wiwfof w f  grgrttk' },
    {id:0, img:'../../../../../assets/images/default-placeholder.png', title:'IDK',description:'lorefemiuuuuunf eunfi uefbiebfieb fuebfuevbfguevbfj dvbfhdbfebfi ifbhsifbsijfbeib esbfiebfseibfsdjifbdjfbisefb fbsjfbsnfbfbeih bfjsbifesufsbjkfbdnsbfie hfbefhbsdhf bhfbdhb dhfbdh bd  dbh djbdhb sdjkfbeh  wiwfof w f  grgrttk' },
];

  constructor() { }

  ngOnInit(): void {
  }

}
