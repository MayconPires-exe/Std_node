import { randomUUID } from "crypto"

export class Answer {
  public id: string
  public content: string

  /**
   * Creates a new instance of the class.
   *
   * @param {string} title - The title of the instance.
   * @param {string} content - The content of the instance.
   * @param {string} [id] - The optional ID of the instance.
   */
  constructor(content: string, id?: string) {
    this.id = id ?? randomUUID()
    this.content = content
  }
}