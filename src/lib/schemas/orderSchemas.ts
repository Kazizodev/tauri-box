import { z } from 'zod'

// ? Horizontal Schemas
export const order1Schema = z.object({
    date: z.string().optional(),
    reference: z.string().optional(),
    rfq: z.string().optional(),

    customerName: z.string().optional(),
    customerAddress1: z.string().optional(),
    customerAddress2: z.string().optional(),
    customerAddress3: z.string().optional(),
    customerPhone: z.string().optional(),
    customerFax: z.string().optional(),
    customerContact: z.string().optional(),
    customerContactPhone: z.string().optional(),

    dwgName: z.string().optional(),
    dwgNo: z.string().optional(),
})

export const order2Schema = z.object({
    resinId: z.number().min(1, 'Select a resin'),
    corrLinear: z.string().default('yes'),

    shellInternalDiam: z.number(),
    shellLength: z.number(),
    shellJoint1: z.number(),
    shellJoint2: z.number(),
    shellJoint3: z.number(),
    shellJoint4: z.number(),
    shellJoint5: z.number(),
    shellJoint6: z.number(),
    shellLaminateId: z.number().min(1, 'Select a laminate'),
    shellLaminateMinThk: z.number(),

    headType: z.string().default('Conical'),
    headHeight: z.number(),
    headLaminateId: z.number().min(1, 'Select a laminate'),
    headLaminateMinThk: z.number(),

    saddleHeight: z.number(),
    saddleWidth: z.number(),
    saddleLaminateId: z.number().min(1, 'Select a laminate'),
    saddleLaminateMinThk: z.number(),

    bodyFlange: z.string().default('no'),
    bodyFlangeLocation1: z.number(),
    bodyFlangeLocation2: z.number(),
    bodyFlangeLocation3: z.number(),
    bodyFlangeLocation4: z.number(),
    bodyFlangeLocation5: z.number(),
    bodyFlangeLocation6: z.number(),

    liquidDensity: z.number(),
    pressure: z.number(),

    vacuum: z.number(),
    vacuumBuckle: z.number(),

    snowLoad: z.number(),
    wind: z.number(),

    seismic: z.string().default('0'),
})

export const order3Schema = z.object({
    drawingRef: z.string().optional(),
    size: z.number(),
    press: z.number(),
    loc: z.number(),
    orient: z.number().max(360),
    nozId: z.string().optional(),
    boltId: z.string().optional(),
    gasketId: z.string().optional(),
    blind: z.string().optional(),
})

export const order4Schema = z.object({
    drawingRef: z.string().optional(),
    manwayId: z.string().optional(),
    size: z.number().optional(),
    loc: z.number().optional(),
    orient: z.number().max(360).optional(),
    boltId: z.string().optional(),
    gasketId: z.string().optional(),
    hinge: z.string().default('none').optional(),
})

export const order5Schema = z.object({
    liftLugs: z.number(),
    markup: z.number(),
    design: z.number(),
    postcure: z.number(),
    // additives?: string
    nameplate: z.number(),
    ladderClips: z.number(),
    ventDiameter: z.number(),

    hydro: z.number(),
    ae: z.number(),
    vacuum: z.number(),
    cutouts: z.number(),

    freight: z.number(),
    handling: z.number(),
    cradles: z.number(),
    escort: z.number(),

    new: z.boolean(),
    tankNum: z.number(),
    head: z.number(),
    shell: z.number(),
    other: z.number(),
})

export const order6Schema = z.object({
    otherCostItems: z.array(z.object({ description: z.string(), itemCost: z.number().optional(), matCost: z.number().optional(), wtLbs: z.number().optional(), labHours: z.number().optional() })),
    otherCostNotes: z.array(z.object({ note: z.string() })),
})

export const order7Schema = z.object({
    thickness: z.number(),
    distFromHead: z.number(),
    saddleArc: z.number(),
})

// ? Vertical Schemas
export const order2VerticalSchema = z.object({
    resinId: z.number().min(1, 'Select a resin'),
    corrLinear: z.string().default('yes'),

    shellInternalDiam: z.number(),
    shellBottomElevation: z.number(),
    shellLength: z.number(),
    shellJoint1: z.number(),
    shellJoint2: z.number(),
    shellJoint3: z.number(),
    shellJoint4: z.number(),
    shellJoint5: z.number(),
    shellJoint6: z.number(),
    shellLaminateId: z.number().min(1, 'Select a laminate'),
    shellLaminateMinThk: z.number(),

    topHeadType: z.string().default('Conical'),
    topHeadHeight: z.number(),
    topHeadLaminateId: z.number().min(1, 'Select a laminate'),
    topHeadLaminateMinThk: z.number(),

    bottomHeadType: z.string().default('Conical'),
    bottomHeadHeight: z.number(),
    bottomHeadLaminateId: z.number().min(1, 'Select a laminate'),
    bottomHeadLaminateMinThk: z.number(),

    supportType: z.string().default('HLU Lugs'),
    supportBcd: z.number(),
    supportElevation: z.number(),
    supportLaminateId: z.number().min(1, 'Select a laminate'),
    supportLaminateMinThk: z.number(),

    bodyFlange: z.string().default('no'),
    bodyFlangeLocation1: z.number(),
    bodyFlangeLocation2: z.number(),
    bodyFlangeLocation3: z.number(),
    bodyFlangeLocation4: z.number(),
    bodyFlangeLocation5: z.number(),
    bodyFlangeLocation6: z.number(),

    packing: z.string().default('no'),
    packingElevLev: z.number(),
    packingDensity: z.number(),
    packingTopLedgeId: z.number(),
    packingBottomLedgeId: z.number(),

    liquidDensity: z.number(),
    pressure: z.number(),

    vacuum: z.number(),
    vacuumBuckle: z.number(),

    snowLoad: z.number(),
    snowLoadAxialLoad: z.number(),

    wind: z.number(),

    seismic: z.string().default('0'),
})
