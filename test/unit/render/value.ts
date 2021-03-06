import { Value } from '../../../src/render/value'
import { Context } from '../../../src/context/context'
import { expect } from 'chai'

describe('Value', function () {
  it('should eval number variable', async function () {
    const ctx = new Context({ one: 1 })
    expect(new Value('one').value(ctx)).to.equal(1)
  })
  it('question mark should be valid variable name', async function () {
    const ctx = new Context({ 'has_value?': true })
    expect(new Value('has_value?').value(ctx)).to.equal(true)
  })
  it('should eval string variable', async function () {
    const ctx = new Context({ x: 'XXX' })
    expect(new Value('x').value(ctx)).to.equal('XXX')
  })
  it('should eval null literal', async function () {
    expect(new Value('null').value({} as any)).to.be.null
  })
  it('should eval nil literal', async function () {
    expect(new Value('nil').value({} as any)).to.be.null
  })
})
