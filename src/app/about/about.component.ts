import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  goToGit(): void {
    this.document.location.href = "https://github.com/santanaluc";
  }

  ngOnInit() {}
}
