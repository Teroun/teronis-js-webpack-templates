// events - a super-basic Javascript (publish subscribe) pattern
// rewritten: now class-like and only one event can be fired
export class SingleEvent {
    Add(fn) {
        this.events = this.events || [];
        this.events.push(fn);
    }

    Remove(fn) {
        if (this.events) {
            for (var i = 0; i < this.events.length; i++) {
                if (this.events[i] === fn) {
                    this.events.splice(i, 1);
                    break;
                }
            };
        }
    }

    Apply(scope, args) {
        if (this.events) {
            this.events.forEach((fn) => fn.apply(scope, args));
        }
    }

    Call(scope, ...args) {
        this.Apply(scope, args);
    }

    Invoke() {
        this.Apply(undefined, arguments);
    }
}