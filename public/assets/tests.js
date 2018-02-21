'use strict';

define('auctions/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/categories-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/categories-component.js should pass ESLint\n\n6:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n21:13 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('components/footer-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/footer-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/header-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/header-component.js should pass ESLint\n\n22:23 - \'data\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/price-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/price-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/product-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/product-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/rating-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/rating-component.js should pass ESLint\n\n10:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:17 - \'Ember\' is not defined. (no-undef)\n26:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n26:14 - \'Ember\' is not defined. (no-undef)\n34:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n34:14 - \'Ember\' is not defined. (no-undef)\n42:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n42:16 - \'Ember\' is not defined. (no-undef)\n50:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n50:15 - \'Ember\' is not defined. (no-undef)\n58:15 - \'Ember\' is not defined. (no-undef)\n58:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n67:9 - Use closure actions, unless you need bubbling (ember/closure-actions)\n85:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass ESLint\n\n20:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n31:17 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n31:17 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n4:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('controllers/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/register.js should pass ESLint\n\n7:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('helpers/contains.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/contains.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/division-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/division-helper.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/if-equals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/if-equals.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/lowercase-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/lowercase-helper.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/pagination-array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/pagination-array.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/uppercase-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/uppercase-helper.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/admin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n21:37 - \'error\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n53:12 - \'error\' is defined but never used. (no-unused-vars)\n61:12 - \'error\' is defined but never used. (no-unused-vars)\n69:12 - \'error\' is defined but never used. (no-unused-vars)\n77:12 - \'error\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass ESLint\n\n16:23 - \'data\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/register.js should pass ESLint\n\n18:19 - \'data\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/seller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/seller.js should pass ESLint\n\n');
  });

  QUnit.test('routes/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user.js should pass ESLint\n\n');
  });

  QUnit.test('services/ajax.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/ajax.js should pass ESLint\n\n');
  });

  QUnit.test('services/product-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/product-service.js should pass ESLint\n\n');
  });

  QUnit.test('services/user-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/user-service.js should pass ESLint\n\n');
  });
});
define('auctions/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('auctions/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'auctions/tests/helpers/start-app', 'auctions/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('auctions/tests/helpers/start-app', ['exports', 'auctions/app', 'auctions/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('auctions/tests/integration/components/categories-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('categories-component', 'Integration | Component | categories component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "xzPsLiDc",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"categories-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "zu031163",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"categories-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('auctions/tests/integration/components/footer-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('footer-component', 'Integration | Component | footer component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "w/Y6Wwu7",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"footer-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "XCyOfH/2",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"footer-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('auctions/tests/integration/components/header-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('header-component', 'Integration | Component | header component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "PmCEARoP",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"header-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "Ue2qwXxb",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"header-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('auctions/tests/integration/components/price-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('price-component', 'Integration | Component | price component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "l0/g0w7k",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"price-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "X0umWjh6",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"price-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('auctions/tests/integration/components/product-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('product-component', 'Integration | Component | product component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Wvytx4F3",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"product-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "u1XCjswA",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"product-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('auctions/tests/integration/components/rating-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('rating-component', 'Integration | Component | rating component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "5QeI0RTY",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"rating-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "QFK5uJUP",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"rating-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('auctions/tests/integration/helpers/contains-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('contains', 'helper:contains', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "oRjBKgb+",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"contains\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('auctions/tests/integration/helpers/division-helper-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('division-helper', 'helper:division-helper', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "lMj5YRFQ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"division-helper\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('auctions/tests/integration/helpers/if-equals-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('if-equals', 'helper:if-equals', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "32aWmNkt",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"if-equals\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('auctions/tests/integration/helpers/lowercase-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('lowercase', 'helper:lowercase', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "NEo3QuiU",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"lowercase\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('auctions/tests/integration/helpers/pagination-array-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('pagination-array', 'helper:pagination-array', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "mHWfD9CX",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"pagination-array\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('auctions/tests/integration/helpers/uppercase-helper-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uppercase-helper', 'helper:uppercase-helper', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "NABO5Shq",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"uppercase-helper\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('auctions/tests/test-helper', ['auctions/app', 'auctions/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('auctions/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/categories-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/categories-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/footer-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/footer-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/header-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/price-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/price-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/product-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/product-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/rating-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rating-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/contains-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/contains-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/division-helper-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/division-helper-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/if-equals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/if-equals-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/lowercase-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/lowercase-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/pagination-array-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/pagination-array-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/uppercase-helper-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/uppercase-helper-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admin-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/seller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/seller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/ajax-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/ajax-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/product-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/product-service-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/user-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/user-service-test.js should pass ESLint\n\n');
  });
});
define('auctions/tests/unit/controllers/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('auctions/tests/unit/controllers/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('auctions/tests/unit/controllers/register-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:register', 'Unit | Controller | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('auctions/tests/unit/routes/admin-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:admin', 'Unit | Route | admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('auctions/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('auctions/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('auctions/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('auctions/tests/unit/routes/register-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:register', 'Unit | Route | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('auctions/tests/unit/routes/seller-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:seller', 'Unit | Route | seller', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('auctions/tests/unit/routes/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:user', 'Unit | Route | user', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('auctions/tests/unit/services/ajax-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:ajax', 'Unit | Service | ajax', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('auctions/tests/unit/services/product-service-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:product-service', 'Unit | Service | product service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('auctions/tests/unit/services/user-service-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:user-service', 'Unit | Service | user service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('auctions/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
