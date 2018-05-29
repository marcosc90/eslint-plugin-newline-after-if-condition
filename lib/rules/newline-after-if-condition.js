/**
 * @fileoverview Enforce new line after if condition
 * @author Marcos Casagrande
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: "Enforce new line after if condition",
			category: "Best Practices",
			recommended: false
		},
		fixable: null
	},

	create: function(context) {

		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		/**
		 * Check if theres a newline after if condition, report if it is missing.
		 * @param {ASTNode} node The first IfStatement node of the chain.
		 */
		function checkNewlineAfterIf(node) {

			let diff = 0;
			let valid = false;

			if(node.consequent.type === 'BlockStatement'){

				const start = !node.consequent.body.length ? node.consequent.loc.end.line : node.consequent.body[0].loc.start.line;
				valid = (start - node.consequent.loc.start.line) !== 0;

			} else {

				diff = (node.consequent.loc.start.line - node.test.loc.start.line);
				valid = diff === 1;

			}

			if(!valid) {
				context.report({
					node,
					message: `Expected one newline after if condition, found: ${diff}`
				});
			}
		}


		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {

			IfStatement(node) {
				if (node.parent.type !== "IfStatement") {
					checkNewlineAfterIf(node);
				}
			}
		};
	}
};
