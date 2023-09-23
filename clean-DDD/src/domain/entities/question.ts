import { randomUUID } from "crypto"

export class Question {
  public id: string
  public title: string
  public answers: string

  /**
   * Creates a new instance of the class.
   *
   * @param {string} title - The title of the instance.
   * @param {string} answers - The answers of the instance.
   * @param {string} [id] - The optional ID of the instance.
   */
  constructor(title: string, answers: string, id?: string) {
    this.id = id ?? randomUUID()
    this.title = title
    this.answers = answers
  }
}