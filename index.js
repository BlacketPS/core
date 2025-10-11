const prismaPkg = require('@prisma/client');
const out = { ...prismaPkg };
// Lift Prisma namespace (enums/constants) onto top-level named exports for compatibility
if (prismaPkg && prismaPkg.Prisma && typeof prismaPkg.Prisma === 'object') {
	Object.assign(out, prismaPkg.Prisma);
}
module.exports = out;
