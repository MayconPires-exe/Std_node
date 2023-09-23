import { randomUUID } from "crypto"

export class Instructor {
  public id: string
  public name: string

  /**
   * Constructs a new instance of the class.
   *
   * @param {string} name - The name parameter.
   * @param {string?} id - The optional id parameter.
   */
  constructor(name: string, id?: string) {
    this.name = name
    this.id = id ?? randomUUID()
  }
}