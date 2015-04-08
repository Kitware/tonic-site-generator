var actions = [];

function registerModuleActions(m) {
    actions = [].concat(actions, m.actions);
}

function process() {
    if(actions.length > 0) {
        actions.shift()(process);
    }
}

module.exports = {
    register : registerModuleActions,
    process  : process
}
