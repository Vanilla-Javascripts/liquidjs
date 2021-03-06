import { RenderError } from '../util/error'
import { Context } from '../context/context'
import { ITemplate } from '../template/itemplate'
import { Emitter } from './emitter'

export class Render {
  public * renderTemplates (templates: ITemplate[], ctx: Context, emitter = new Emitter()): IterableIterator<string> {
    for (const tpl of templates) {
      try {
        const html = yield tpl.render(ctx, emitter)
        html && emitter.write(html)
        if (emitter.break || emitter.continue) break
      } catch (e) {
        const err = RenderError.is(e) ? e : new RenderError(e, tpl)
        throw err
      }
    }
    return emitter.html
  }
}
