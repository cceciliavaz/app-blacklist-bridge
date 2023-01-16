import { Component, OnInit } from "@angular/core";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "app-blacks",
  templateUrl: "./blacks.component.html",
  styleUrls: ["./blacks.component.css"],
})
export class BlacksComponent implements OnInit {
  public tableData1: TableData;

  constructor() {}

  ngOnInit() {
    this.tableData1 = {
      headerRow: ["ID", "Nome", "Skill", "Cidade", "UF", "Celular", "Situação", "Status", "Pontuação"],
      dataRows: [
        [
          "1",
          "Gustavo Henrique",
          "Frontend",
          "Itaquaquecetuba",
          "SP",
          "(11) 9 9546-6655",
          "Procurando emprego",
          "Ativo",
          "940"
        ],
        [
          "1",
          "Mauricio Pereira",
          "Frontend",
          "Itaquaquecetuba",
          "SP",
          "(11) 9 4587-2265",
          "Estagiando",
          "Ativo",
          "650"
        ],
        [
          "1",
          "Beatriz Santana",
          "Frontend",
          "Poá",
          "SP",
          "(11) 9 9568-2556",
          "Procurando emprego",
          "Ativo",
          "240"
        ],
        [
          "1",
          "Mariana Santos",
          "Backend",
          "Ferraz de Vasconelos",
          "SP",
          "(11) 9 8455-6455",
          "Contratado CLT",
          "Ativo",
          "102"
        ],
      ],
    };
  }
}
